// Libs
import React from 'react';
import Select from 'react-select';
import 'react-select/dist/react-select.css';


var options = [
    { value: 'nfl', label: 'NFL', color: '#FFFFFF', backgroundColor: '#013A73' },
    { value: 'az', label: 'Arizona Cardinals', color: '#FFFFFF', backgroundColor: '#B00539' },
    { value: 'atl', label: 'Atlanta Falcons', color: '#C9233F', backgroundColor: "#000000" },
    { value: 'bal', label: 'Baltimore Ravens', color: '#E4B20C', backgroundColor: '#26125C' },
    { value: 'buf', label: 'Buffalo Bills', color: '#FFFFFF', backgroundColor: '#043284' },
    { value: 'car', label: 'Carolina Panthers', color: '#0498D7', backgroundColor: '#000000' },
    { value: 'chi', label: 'Chicago Bears', color: '#DF6108', backgroundColor: '#00142C' },
    { value: 'cin', label: 'Cincinnati Bengals', color: '#000000', backgroundColor: '#F24E25' },
    { value: 'cle', label: 'Cleveland Browns', color: '#EC5614', backgroundColor: '#391000' },
    { value: 'dal', label: 'Dallas Cowboys', color: '#C2C2C6', backgroundColor: '#0D254C' },
    { value: 'den', label: 'Denver Broncos', color: '#0C2244', backgroundColor: '#F84D04'  },
    { value: 'det', label: 'Detroit Lions', color: '#A5ACAF', backgroundColor: '#006DB0'  },
    { value: 'gb', label: 'Green Bay Packers', color: '#313F36', backgroundColor: '#FCCF00'  },
    { value: 'hou', label: 'Houston Texans', color: '#C9243F', backgroundColor: '#00143F'  },
    { value: 'ind', label: 'Indianapolis Colts', color: '#FFFFFF', backgroundColor: '#043A74'  },
    { value: 'jax', label: 'Jacksonville Jaguars', color: '#000000', backgroundColor: '#006779'  },
    { value: 'kc', label: 'Kansas City Chiefs', color: '#F2C800', backgroundColor: '#B20032'  },
    { value: 'lac', label: 'Los Angeles Chargers', color: '#FFC10C', backgroundColor: '#001744'  },
    { value: 'lar', label: 'Los Angeles Rams', color: '#C9B074', backgroundColor: '#0D254C'  },
    { value: 'mia', label: 'Miami Dolphins', color: '#FFFFFF', backgroundColor: '#00919E'  },
    { value: 'min', label: 'Minnesota Vikings', color: '#FFC72C', backgroundColor: '#582C83'  },
    { value: 'ne', label: 'New England Patriots', color: '#DCDDDD', backgroundColor: '#0C2244'  },
    { value: 'no', label: 'New Orleans Saints', color: '#C9B074', backgroundColor: '#000000'  },
    { value: 'nyg', label: 'New York Giants', color: '#AD0334', backgroundColor: '#192E6C'  },
    { value: 'nyj', label: 'New York Jets', color: '#FFFFFF', backgroundColor: '#1C322C'  },
    { value: 'oak', label: 'Oakland Raiders', color: '#000000', backgroundColor: '#C4CACC'  },
    { value: 'phi', label: 'Philadelphia Eagles', color: '#000000', backgroundColor: '#00464F'  },
    { value: 'pit', label: 'Pittsburgh Steelers', color: '#FCBA1C', backgroundColor: '#000000'  },
    { value: 'sf', label: 'San Francisco 49ers', color: '#C4031E', backgroundColor: '#BCA05D'  },
    { value: 'sea', label: 'Seattle Seahawks', color: '#7D5B24', backgroundColor: '#0C2244'  },
    { value: 'tb', label: 'Tampa Bay Buccaneers', color: '#000000', backgroundColor: '#D60A0B'  },
    { value: 'ten', label: 'Tennessee Titans', color: '#FFFFFF', backgroundColor: '#648FCC'  },
    { value: 'was', label: 'Washington Redskins', color: '#F1C500', backgroundColor: '#57202E'  }

];

class Team extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: 'nfl'};
    this.handleChange = this.handleChange.bind(this);
    this.handleColorChange = this.handleColorChange.bind(this);
  }

  handleChange(event) {
    this.setState({
      value: event.value
    });
  }
  handleColorChange() {

  }
  render() {
    const color = this.props.color;
    const backgroundColor = this.props.backgroundColor;
    return (
      <div >
      <h1>{this.props.color}</h1>
      <img className="thumbnail" src={'img/' + this.state.value + '.gif'}/>
      <Select
          name="form-field-name"
          value={this.state.value}
          options={options}
          onChange={this.handleChange}
          onColorChange={this.handleColorChange}
          clearable={false}
        />
      </div>
    );
  }
}

export default Team;
