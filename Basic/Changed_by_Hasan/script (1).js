// Sample notes data
let notesData = [
    { id: 1, title: "Meeting Notes", text: "Discuss project timelines.", color: "#ffffff", archived: false, trashed: false },
    { id: 2, title: "Shopping List", text: "Milk, eggs, bread.", color: "#ffcccb", archived: false, trashed: false },
    { id: 3, title: "Ideas", text: "New app feature ideas.", color: "#c8e6c9", archived: true, trashed: false },
    { id: 4, title: "Gym Schedule", text: "Monday: Cardio, Wednesday: Upper body.", color: "#cfd8dc", archived: false, trashed: true }
];

document.addEventListener("DOMContentLoaded", function () {
    renderNotes(); // Render initial notes

    // Event listeners
    document.getElementById("noteForm").addEventListener("submit", function (event) {
        event.preventDefault();
        saveNote();
    });
});

function renderNotes() {
    const notesContainer = document.getElementById("notesContainer");
    notesContainer.innerHTML = ""; // Clear previous notes

    notesData.forEach(note => {
        const noteElement = createNoteElement(note);
        notesContainer.appendChild(noteElement);
    });
}

function createNoteElement(note) {
    const noteDiv = document.createElement("div");
    noteDiv.classList.add("note");
    noteDiv.style.backgroundColor = note.color;

    const titleElement = document.createElement("h3");
    titleElement.textContent = note.title;

    const textElement = document.createElement("p");
    textElement.textContent = note.text;

    const footerElement = document.createElement("div");
    footerElement.classList.add("note-footer");

    const deleteButton = document.createElement("span");
    deleteButton.classList.add("material-icons-outlined", "small-icon", "hover");
    deleteButton.textContent = "delete";
    deleteButton.onclick = () => deleteNoteById(note.id);
    footerElement.appendChild(deleteButton);

    noteDiv.appendChild(titleElement);
    noteDiv.appendChild(textElement);
    noteDiv.appendChild(footerElement);

    return noteDiv;
}

function deleteNoteById(id) {
    notesData = notesData.filter(note => note.id !== id);
    renderNotes();
}

function clearSearch() {
    document.getElementById("searchInput").value = "";
}

function toggleSettingsDropdown() {
    const dropdown = document.getElementById("settingsDropdown");
    dropdown.classList.toggle("show");
}

function editLabel() {
    // Implement label editing functionality here if needed
}

function changeColor() {
    // Implement note color change functionality here if needed
}

function addCollaborator() {
    // Implement collaborator adding functionality here if needed
}

function deleteNote() {
    // Implement note deletion functionality here if needed
}

function toggleSidebarItem(item) {
    // Deactivate currently active item
    const activeSidebarItemElement = document.querySelector(".sidebar-item.active");
    if (activeSidebarItemElement) {
        activeSidebarItemElement.classList.remove("active");
    }

    // Activate selected item
    const sidebarItemElement = document.querySelector(`.sidebar-item[data-item="${item}"]`);
    if (sidebarItemElement) {
        sidebarItemElement.classList.add("active");
        activeSidebarItem = item;

        // Call specific functionality for each sidebar item
        switch (item) {
            case 'notes':
                renderNotes();
                break;
            case 'archive':
                renderArchivedNotes();
                break;
            case 'trash':
                renderTrashedNotes();
                break;
            default:
                break;
        }
    }
}

function renderArchivedNotes() {
    const archivedNotes = notesData.filter(note => note.archived);
    const notesContainer = document.getElementById("notesContainer");
    notesContainer.innerHTML = "";
    archivedNotes.forEach(note => {
        const noteElement = createNoteElement(note);
        notesContainer.appendChild(noteElement);
    });
}

function renderTrashedNotes() {
    const trashedNotes = notesData.filter(note => note.trashed);
    const notesContainer = document.getElementById("notesContainer");
    notesContainer.innerHTML = "";
    trashedNotes.forEach(note => {
        const noteElement = createNoteElement(note);
        notesContainer.appendChild(noteElement);
    });
}
