document.addEventListener("DOMContentLoaded", function() {
    fetch("data.json")  // Fetch data from GitHub-hosted JSON file
        .then(response => response.json())
        .then(data => {
            let topicsDiv = document.getElementById('topics');
            topicsDiv.innerHTML = ''; 

            data.topics.forEach(topic => {
                let topicDiv = document.createElement('div');
                topicDiv.classList.add('section');
                topicDiv.innerHTML = `<strong>${topic.name}</strong>`;
                
                if (topic.subtopics.length > 0) {
                    let subtopicList = document.createElement('ul');
                    topic.subtopics.forEach(subtopic => {
                        let li = document.createElement('li');
                        li.classList.add('readonly');
                        li.textContent = subtopic;
                        subtopicList.appendChild(li);
                    });
                    topicDiv.appendChild(subtopicList);
                }
                
                topicsDiv.appendChild(topicDiv);
            });
        })
        .catch(error => console.error("Error loading data:", error));
});
