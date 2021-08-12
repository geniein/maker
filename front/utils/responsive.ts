
const breakpoints = [576, 768, 992, 1200]

export const responsiveCustom = (custom:any)=> breakpoints.map(
  bp => `@media (min-width: ${bp}px) {
    ${custom}
  }`
)

export const responsiveWidth = breakpoints.map(
  bp => `@media (min-width: ${bp}px) {
    width: ${bp};      
  }`
)