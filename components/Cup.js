export default function Cup({rim,drink,...r}){return <svg viewBox="0 0 120 160" {...r}><use href="#cup" style={{'--rim':rim,'--drink':drink}}/></svg>}
