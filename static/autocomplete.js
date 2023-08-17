const autoCompleteJS = new autoComplete({ 
    placeHolder: "Search For Movie....",
    data: {
        src: films,
    },
    selector : "#autoComplete",
    threshold : 2,
    debounce : 100,
    searchEngine : "strict",
    resultsList : {
        position : "afterend",
        tag : "ul",
        destination : "#autoComplete",
        element: (list, data) => {
            list.setAttribute("id", "movie-list");
        },
        maxResults : 5

    },

    resultItem: {
        highlight: true,
        element : (list,data) => {
            list.setAttribute("class","movie-list-item");
            console.log(data);
        }
    },
    // autoComplete.js Config Options
events: {
    input: {
        focus() {
            const inputValue = autoCompleteJS.input.value;

            if (inputValue.length) autoCompleteJS.start();
        },
    },
}


 });