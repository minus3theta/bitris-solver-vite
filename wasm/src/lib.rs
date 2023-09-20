use std::rc::Rc;
use std::str::FromStr;

use bitris_commands::pc_possible::*;
use bitris_commands::prelude::*;
use wasm_bindgen::prelude::*;

#[wasm_bindgen]
pub fn srs(board_str: &str, height: u32) -> Result<f64, String> {
    let go = || -> anyhow::Result<f64> {
        let mut binder = PcPossibleBulkExecutorBinder::srs();

        // Sets sequences in which you want the PC to be checked.
        // The following represents 'I****'.
        let pattern = Pattern::try_from(vec![
            PatternElement::One(Shape::I),
            PatternElement::Permutation(ShapeCounter::one_of_each(), 4),
        ])?;
        binder.pattern = Rc::from(pattern);

        // The others are the same.
        let board = Board64::from_str(board_str)?;
        binder.clipped_board = ClippedBoard::try_new(board, height)?;
        binder.allow_move = AllowMove::Softdrop;
        binder.allows_hold = true;

        // Finds PCs. If it contains an invalid configuration, an error is returned.
        let results = binder.try_execute()?;

        Ok(results.count_succeed() as f64 / results.count_accepted() as f64)
    };
    go().map_err(|e| e.to_string())
}
