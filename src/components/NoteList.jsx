

function NoteList({notes,onDelete,onComplete,sortBy}) {

let sortedNotes=notes;

switch (sortBy) {
  case "earliest": sortedNotes = [...notes].sort((a,b)=>new Date(a.createdAt) - new Date(b.createdAt));
 break;

 case "latest" :sortedNotes=[...notes].sort((a,b)=> new Date(b.createdAt) - new Date(a.createdAt));
 break;
 
 case "completed" :sortedNotes = [...notes].filter(note=> note.completed);
 break;
 
  default:
    break;
}

  return (
    <div className="note-list">
      {
        sortedNotes.map((note)=> <NoteItem 
        key={note.id} 
        note={note} 
        onDelete={onDelete} 
        onComplete={onComplete}/>)
      }
    </div>
  )
}

export default NoteList;


function NoteItem({note,onDelete,onComplete}){

  const options={
    year:"numeric",
    month:"long",
    day:"numeric"
  }
return (
  <div className={`note-item ${note.completed ? "completed" : ""}`}>
    <div className="note-item__header">
      <div >
        <p className="title">{note.title}</p>
        <p className="desc">{note.description}</p>
      </div>
      <div className="actions">
        <button onClick={()=>onDelete(note.id)}>
       <img src="/public/delete.png" alt="" className="trash-icon"/>
        </button>
        <input type="checkbox" 
        id={note.id}
        name={note.id}
        checked={note.completed}
        value={note.id}
        onChange={onComplete}/>
      </div>
    </div>
    <div className="note-item__footer">
      {
      new Date(note.createdAt).toLocaleDateString("en-Us",options)
      }</div>
  </div>
)
}


//let sortedNotes=notes;
//if(sortBy==="earliest")
  //sortedNotes = [...notes].sort((a,b)=>new Date(a.createdAt) - new Date(b.createdAt));

//if(sortBy==="latest")
  //sortedNotes=[...notes].sort((a,b)=> new Date(b.createdAt) - new Date(a.createdAt));

//if(sortBy === "completed")
  //sortedNotes = [...notes].filter(note=> note.completed);