


function NoteHeader({notes , sortBy , onSort}) {

  

  return (
    <div className="note-header">
        <h2>My Notes({notes.length})</h2>
        <select value={sortBy} onChange={onSort}>
            <option value="latest">latest notes</option>
            <option value="earliest">earliest notes</option>
            <option value="completed">completed notes</option>
        </select>
    </div>
  )
}

export default NoteHeader