// Libs
import React from 'react';
import Select from 'react-select';
import 'react-select/dist/react-select.css';


var options = [
  { value: 'nfl', label: 'NFL', textColor: '#FFFFFF', primaryColor: '#013A73', secondaryColor: '#DB1B26' },
  { value: 'az', label: 'Arizona Cardinals', textColor: '#FFFFFF', primaryColor: '#B00539', secondaryColor: '#000000' },
  { value: 'atl', label: 'Atlanta Falcons', textColor: '#D1D2D4', primaryColor: "#000000", secondaryColor: '#C9233F' },
  { value: 'bal', label: 'Baltimore Ravens', textColor: '#E4B20C', primaryColor: '#26125C', secondaryColor: '#000000' },
  { value: 'buf', label: 'Buffalo Bills', textColor: '#FFFFFF', primaryColor: '#233C7F',secondaryColor: '#CD202F' },
  { value: 'car', label: 'Carolina Panthers', textColor: '#D2D3D4', primaryColor: '#000000', secondaryColor: '#0498D7' },
  { value: 'chi', label: 'Chicago Bears', textColor: '#FFFFFF', primaryColor: '#00142C', secondaryColor: '#DF6108' },
  { value: 'cin', label: 'Cincinnati Bengals', textColor: '#FFFFFF', primaryColor: '#F24E25', secondaryColor: '#000000' },
  { value: 'cle', label: 'Cleveland Browns', textColor: '#FFFFFF', primaryColor: '#391000', secondaryColor: '#EC5614' },
  { value: 'dal', label: 'Dallas Cowboys', textColor: '#FFFFFF', primaryColor: '#0D254C', secondaryColor: '#C2C2C6' },
  { value: 'den', label: 'Denver Broncos', textColor: '#FFFFFF', primaryColor: '#F84D04', secondaryColor: '#0C2244'  },
  { value: 'det', label: 'Detroit Lions', textColor: '#FFFFFF', primaryColor: '#006DB0', secondaryColor: '#A5ACAF'  },
  { value: 'gb', label: 'Green Bay Packers', textColor: '#FFFFFF', primaryColor: '#313F36', secondaryColor: '#FCCF00'  },
  { value: 'hou', label: 'Houston Texans', textColor: '#FFFFFF', primaryColor: '#00143F', secondaryColor: '#C9243F'  },
  { value: 'ind', label: 'Indianapolis Colts', textColor: '#FFFFFF', primaryColor: '#043A74', secondaryColor: '#043A74'  },
  { value: 'jax', label: 'Jacksonville Jaguars', textColor: '#000000', primaryColor: '#006779', secondaryColor: '#D9A218'  },
  { value: 'kc', label: 'Kansas City Chiefs', textColor: '#FFFFFF', primaryColor: '#B20032', secondaryColor: '#F2C800'  },
  { value: 'lac', label: 'Los Angeles Chargers', textColor: '#FFC10C', primaryColor: '#001744', secondaryColor: '#1076C3'  },
  { value: 'lar', label: 'Los Angeles Rams', textColor: '#FFFFFF', primaryColor: '#0D254C', secondaryColor: '#C9B074'  },
  { value: 'mia', label: 'Miami Dolphins', textColor: '#FFFFFF', primaryColor: '#00919E', secondaryColor: '#FF8501'  },
  { value: 'min', label: 'Minnesota Vikings', textColor: '#FFFFFF', primaryColor: '#582C83', secondaryColor: '#FFC72C'  },
  { value: 'ne', label: 'New England Patriots', textColor: '#DCDDDD', primaryColor: '#0C2244', secondaryColor: '#CC122C'  },
  { value: 'no', label: 'New Orleans Saints', textColor: '#FFFFFF', primaryColor: '#000000', secondaryColor: '#C9B074'  },
  { value: 'nyg', label: 'New York Giants', textColor: '#FFFFFF', primaryColor: '#192E6C', secondaryColor: '#AD0334'  },
  { value: 'nyj', label: 'New York Jets', textColor: '#FFFFFF', primaryColor: '#1C322C', secondaryColor: '#1C322C'  },
  { value: 'oak', label: 'Oakland Raiders', textColor: '#FFFFFF', primaryColor: '#C4CACC', secondaryColor: '#000000'  },
  { value: 'phi', label: 'Philadelphia Eagles', textColor: '#FFFFFF', primaryColor: '#00464F', secondaryColor: '#BAC4C9'  },
  { value: 'pit', label: 'Pittsburgh Steelers', textColor: '#FFFFFF', primaryColor: '#000000', secondaryColor: '#FCBA1C'  },
  { value: 'sf', label: 'San Francisco 49ers', textColor: '#FFFFFF', primaryColor: '#C4031E', secondaryColor: '#BCA05D'  },
  { value: 'sea', label: 'Seattle Seahawks', textColor: '#A5ACB0', primaryColor: '#0C2244', secondaryColor: '#66BD29'  },
  { value: 'tb', label: 'Tampa Bay Buccaneers', textColor: '#FFFFFF', primaryColor: '#D60A0B', secondaryColor: '#B1BABF'  },
  { value: 'ten', label: 'Tennessee Titans', textColor: '#FFFFFF', primaryColor: '#648FCC', secondaryColor: '#002A5C'  },
  { value: 'was', label: 'Washington Redskins', textColor: '#FFFFFF', primaryColor: '#57202E', secondaryColor: '#F1C500'  }


];

class Team extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(event) {
      this.props.onValueChange(event.value);
      this.props.ontextColorChange(event.textColor);
      this.props.onBackgroundChange(event.primaryColor);
      this.props.onSecondaryColorChange(event.secondaryColor);
      this.props.onNameChange(event.label);
  }
  render() {
    const textColor = this.props.textColor;
    const secondaryColor = this.props.secondaryColor;
    const primaryColor = this.props.primaryColor;
    const value = this.props.value;
    const name = this.props.label;
    return (
      <div >
      <Select
          name="form-field-name"
          value={value}
          options={options}
          onChange={this.handleChange}
          clearable={false}
        />
      </div>
    );
  }
}

export default Team;
