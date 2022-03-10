export function Button({classList, value, action}){
    return (
        <button className={`btn ${classList}`} onClick={action}>{value}</button>
    )
}