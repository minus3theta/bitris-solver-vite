use wasm_bindgen::prelude::*;

#[wasm_bindgen]
pub fn inc(x: usize) -> usize {
    x + 2
}
