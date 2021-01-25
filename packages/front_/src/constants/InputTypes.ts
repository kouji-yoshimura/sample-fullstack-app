export const TEXT = "text"
export const PASSWORD = "password"
export const CHECKBOX = "checkbox"
export const RADIO = "radio"
export const FILE = "file"
export const HIDDEN = "hidden"
export const SUBMIT = "submit"
export const RESET = "reset"
export const BUTTON = "button"
export const IMAGE = "image"

export const InputTypeList = [TEXT, PASSWORD, CHECKBOX, RADIO, FILE, HIDDEN, SUBMIT, RESET, BUTTON, IMAGE]
export type InputType = typeof InputTypeList[number]
