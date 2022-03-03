export default function Scroll({children}) {
    return(
    <div style={{overflowY:'scroll', height:'600px'}} className="taskdiv">
        {children}
    </div>
    )
}
