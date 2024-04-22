
const ActionButton = ({ fromDetails }) => {
    return (
        <div className={`w-full flex gap-4 mt-4 ${fromDetails && 'flex-1'}`}>
            <button className="w-full bg-indigo-600 hover:bg-indigo-800">
                Interested
            </button>
            <button className="w-full">Going</button>
        </div>
    )
}

export default ActionButton
