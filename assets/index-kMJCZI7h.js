function r(t,e,n={dateStyle:"short",timeStyle:"short"}){return t?new Intl.DateTimeFormat("pt-BR",{...n,timeZone:e}).format(new Date(t)):"—"}export{r as f};
