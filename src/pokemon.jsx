import React from "react";

class Pokemon extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      imageUrl: null,
      name: null,
    };
  }

  componentDidMount() {
    fetch(`https://pokeapi.co/api/v2/pokemon/${this.props.id}`)
      .then((x) => x.json())
      .then(({ name, sprites }) => {
        this.setState(() => {
          return {
            isLoading: false,
            name,
            imageUrl: sprites.front_default,
          };
        });
      });
  }

  render() {
    return this.state.isLoading ? (
      <p>Loading</p>
    ) : (
      <div>
        <img src={this.state.imageUrl} alt={this.state.name} />
        <h3>{this.state.name}</h3>
      </div>
    );
  }
}

const PokemonDeck = () => {
  const pokemonIds = new Array(20).fill(1).map((a, index) => a + index);
  const pokemons = pokemonIds.map((id) => <Pokemon id={id} key={id} />);

  const style = {
    display: "flex",
    flexWrap: "wrap",
    gap: "10px",
    width: "80%",
  };

  return <div style={style}>{pokemons}</div>;
};

export default PokemonDeck;
