import ExpenseTracker from "./ExpenseTracker"
const ExpenseTrackerMain =()=>{
    return (
        <div style={{padding:"0px 20px 20px 20px"}}>
            <div style={
                {
            color: "white",
            fontSize: "2.5rem",
            marginBottom: "0.5rem",
            fontWeight: "bold",
                }
            }>
                <span>Expense Tracker</span>
            </div>
            <ExpenseTracker/>
        </div>
    )
}
export default ExpenseTrackerMain;