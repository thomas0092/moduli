const prima = async () => {
    const response = await fetch('https://pokeapi.co/api/v2/pokemon/ditto');
          const data = await response.json();
          return data;
        }
          const data = await prima();
          console.log(data);