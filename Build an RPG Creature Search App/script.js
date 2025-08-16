document.getElementById('search-button').addEventListener('click', async function() {
    const pokemonName = document.getElementById('search-input').value.toLowerCase();
    
    try {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);
        const data = await response.json();
        
        // Clear any previous content
        document.getElementById('pokemon-name').innerText = data.name.toUpperCase();
        document.getElementById('pokemon-id').innerText = data.id;
        document.getElementById('weight').innerText = `Weight: ${data.weight}`;
        document.getElementById('height').innerText = `Height: ${data.height}`;
        document.getElementById('hp').innerText = data.stats[0].base_stat; // Display just the number
        document.getElementById('attack').innerText = data.stats[1].base_stat; // Display just the number
        document.getElementById('defense').innerText = data.stats[2].base_stat; // Display just the number
        document.getElementById('special-attack').innerText = data.stats[3].base_stat; // Display just the number
        document.getElementById('special-defense').innerText = data.stats[4].base_stat; // Display just the number
        document.getElementById('speed').innerText = data.stats[5].base_stat; // Display just the number

        // Handle the types element
        const typesElement = document.getElementById('types');
        typesElement.innerHTML = ''; // Clear previous types
        data.types.forEach(type => {
            const typeElement = document.createElement('div');
            typeElement.innerText = type.type.name.toUpperCase();
            typesElement.appendChild(typeElement);
        });

        // Add the Pokémon sprite image
        const sprite = document.getElementById('sprite');
        if (sprite) {
            sprite.src = data.sprites.front_default;
        } else {
            const img = document.createElement('img');
            img.id = 'sprite';
            img.src = data.sprites.front_default;
            document.body.appendChild(img); // or append to a specific div if needed
        }
    } catch (error) {
        alert('Pokémon not found');
    }
});
