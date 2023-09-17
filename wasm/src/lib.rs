use std::rc::Rc;
use std::str::FromStr;

use bitris_commands::pc_possible::*;
use bitris_commands::prelude::*;
use wasm_bindgen::prelude::*;

#[wasm_bindgen]
pub fn srs() -> f64 {
    // You can also process them all together efficiently with `PcPossibleBulkExecutorBinder`.
    let mut binder = PcPossibleBulkExecutorBinder::srs();

    // Sets sequences in which you want the PC to be checked.
    // The following represents 'I****'.
    let pattern = Pattern::try_from(vec![
        PatternElement::One(Shape::I),
        PatternElement::Permutation(ShapeCounter::one_of_each(), 4),
    ])
    .expect("Failed to create a pattern");
    binder.pattern = Rc::from(pattern);

    // The others are the same.
    let board = Board64::from_str(
        "
            ###.....##
            ###....###
            ###...####
            ###....###
        ",
    )
    .expect("Failed to create a board");
    let height = 4;
    binder.clipped_board = ClippedBoard::try_new(board, height).expect("Failed to clip");
    binder.allow_move = AllowMove::Softdrop;
    binder.allows_hold = true;

    // Finds PCs. If it contains an invalid configuration, an error is returned.
    let results = binder.try_execute().expect("Failed to execute");

    // You can take the result out of the return value.
    assert_eq!(results.count_succeed(), 711);
    assert_eq!(results.count_failed(), 129);
    assert_eq!(results.count_accepted(), 840);

    results.count_succeed() as f64 / results.count_accepted() as f64
}
