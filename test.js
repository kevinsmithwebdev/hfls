constructor(){
    super();
    this.state.notes = [];
}

componentDidMount() {
    axios.get('http://localhost:4000/getnotes')

    let tempNotes = [];

    .then(response =>{
        response.data.forEach((note)=>{
                console.log(note.title),
                tempNotes.push(note) // something isn't quite right here
            }
        )
    });
    console.log(tempNotes.length);
}
render(){
    return(
        <div>
            <ul><li>default li</li>
                {
                    this.notes.map((note)=>{
                        return(
                            <li>
                                {note.statetitle}
                            </li>
                        );
                    })
                }
            </ul>
        </div>
    );
}
