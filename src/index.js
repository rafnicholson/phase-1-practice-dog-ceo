console.log('%c HI', 'color: firebrick');
document.addEventListener('DOMContentLoaded', () => {
    const imgUrl = "https://dog.ceo/api/breeds/image/random/4";

    function fetchImages() {
        fetch(imgUrl)
            .then((res) => res.json())
            .then((data) => addImages(data.message));
    }

    function addImages(images) {
        const imageContainer = document.querySelector('#dog-image-container');

        images.forEach(image => {
            const imgElement = document.createElement('img');
            imgElement.src = image;
            imageContainer.appendChild(imgElement);
        });
    }
    fetchImages();
});



document.addEventListener('DOMContentLoaded', () => {
    const breedUrl = "https://dog.ceo/api/breeds/list/all";
    const breedDropdown = document.querySelector('#breed-dropdown');

    function fetchDogBreeds() {
        fetch(breedUrl)
          .then((res) => res.json())
          .then((data) => {
            const breeds = Object.keys(data.message);
            addBreeds(breeds);
          });
    }

    breedDropdown.addEventListener('change', e => {
        const selectedLetter = e.target.value;
        fetch(breedUrl)
          .then((res) => res.json())
          .then((data) => {
            const allBreeds = Object.keys(data.message);
            const filterBreeds = allBreeds.filter((breed) => breed[0] === selectedLetter);
            addBreeds(filterBreeds);
          })
    })

    function addBreeds(breeds) {
        const dogBreeds = document.querySelector('#dog-breeds');
        dogBreeds.innerHTML = '';

        breeds.forEach(breed => {
            const breedElement = document.createElement('li');
            breedElement.textContent = breed;
            breedElement.addEventListener('click', () => {
                breedElement.style.color = 'blue';
            })
            dogBreeds.appendChild(breedElement);
        })
    }

    // function changeFontColor(element) {
    //     element.style.color = 'blue';
    // }

    fetchDogBreeds();
});

