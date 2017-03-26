// Libs
import React from 'react';
import Select from 'react-select';
import 'react-select/dist/react-select.css';


var options = [
  { value: 'nfl', label: 'NFL', primaryColor: '#FFFFFF', backgroundColor: '#013A73', secondaryColor: '#DB1B26' },
  { value: 'az', label: 'Arizona Cardinals', primaryColor: '#FFFFFF', backgroundColor: '#B00539', secondaryColor: '#FFC315' },
  { value: 'atl', label: 'Atlanta Falcons', primaryColor: '#C9233F', backgroundColor: "#000000", secondaryColor: '#D1D2D4' },
  { value: 'bal', label: 'Baltimore Ravens', primaryColor: '#E4B20C', backgroundColor: '#26125C', secondaryColor: '#000000' },
  { value: 'buf', label: 'Buffalo Bills', primaryColor: '#FFFFFF', backgroundColor: '#233C7F',secondaryColor: '#CD202F' },
  { value: 'car', label: 'Carolina Panthers', primaryColor: '#0498D7', backgroundColor: '#000000', secondaryColor: '#D2D3D4' },
  { value: 'chi', label: 'Chicago Bears', primaryColor: '#DF6108', backgroundColor: '#00142C', secondaryColor: '#FFFFFF' },
  { value: 'cin', label: 'Cincinnati Bengals', primaryColor: '#FFFFFF', backgroundColor: '#F24E25', secondaryColor: '#000000' },
  { value: 'cle', label: 'Cleveland Browns', primaryColor: '#FFFFFF', backgroundColor: '#391000', secondaryColor: '#EC5614' },
  { value: 'dal', label: 'Dallas Cowboys', primaryColor: '#C2C2C6', backgroundColor: '#0D254C', secondaryColor: '#FFFFFF' },
  { value: 'den', label: 'Denver Broncos', primaryColor: '#0C2244', backgroundColor: '#F84D04', secondaryColor: '#FFFFFF'  },
  { value: 'det', label: 'Detroit Lions', primaryColor: '#A5ACAF', backgroundColor: '#006DB0', secondaryColor: '#FFFFFF'  },
  { value: 'gb', label: 'Green Bay Packers', primaryColor: '#FFFFFF', backgroundColor: '#313F36', secondaryColor: '#FCCF00'  },
  { value: 'hou', label: 'Houston Texans', primaryColor: '#C9243F', backgroundColor: '#00143F', secondaryColor: '#FFFFFF'  },
  { value: 'ind', label: 'Indianapolis Colts', primaryColor: '#043A74', backgroundColor: '#043A74', secondaryColor: '#FFFFFF'  },
  { value: 'jax', label: 'Jacksonville Jaguars', primaryColor: '#000000', backgroundColor: '#006779', secondaryColor: '#D9A218'  },
  { value: 'kc', label: 'Kansas City Chiefs', primaryColor: '#F2C800', backgroundColor: '#B20032', secondaryColor: 'white'  },
  { value: 'lac', label: 'Los Angeles Chargers', primaryColor: '#FFC10C', backgroundColor: '#001744', secondaryColor: '#1076C3'  },
  { value: 'lar', label: 'Los Angeles Rams', primaryColor: '#C9B074', backgroundColor: '#0D254C', secondaryColor: '#FFFFFF'  },
  { value: 'mia', label: 'Miami Dolphins', primaryColor: '#FFFFFF', backgroundColor: '#00919E', secondaryColor: '#FF8501'  },
  { value: 'min', label: 'Minnesota Vikings', primaryColor: '#FFFFFF', backgroundColor: '#582C83', secondaryColor: '#FFC72C'  },
  { value: 'ne', label: 'New England Patriots', primaryColor: '#DCDDDD', backgroundColor: '#0C2244', secondaryColor: '#CC122C'  },
  { value: 'no', label: 'New Orleans Saints', primaryColor: '#FFFFFF', backgroundColor: '#000000', secondaryColor: '#C9B074'  },
  { value: 'nyg', label: 'New York Giants', primaryColor: '#FFFFFF', backgroundColor: '#192E6C', secondaryColor: '#AD0334'  },
  { value: 'nyj', label: 'New York Jets', primaryColor: '#1C322C', backgroundColor: '#1C322C', secondaryColor: '#FFFFFF'  },
  { value: 'oak', label: 'Oakland Raiders', primaryColor: '#FFFFFF', backgroundColor: '#C4CACC', secondaryColor: '#000000'  },
  { value: 'phi', label: 'Philadelphia Eagles', primaryColor: '#000000', backgroundColor: '#00464F', secondaryColor: '#BAC4C9'  },
  { value: 'pit', label: 'Pittsburgh Steelers', primaryColor: '#FFFFFF', backgroundColor: '#000000', secondaryColor: '#FCBA1C'  },
  { value: 'sf', label: 'San Francisco 49ers', primaryColor: '#FFFFFF', backgroundColor: '#C4031E', secondaryColor: '#BCA05D'  },
  { value: 'sea', label: 'Seattle Seahawks', primaryColor: '#A5ACB0', backgroundColor: '#0C2244', secondaryColor: '#66BD29'  },
  { value: 'tb', label: 'Tampa Bay Buccaneers', primaryColor: '#000000', backgroundColor: '#D60A0B', secondaryColor: '#B1BABF'  },
  { value: 'ten', label: 'Tennessee Titans', primaryColor: '#FFFFFF', backgroundColor: '#648FCC', secondaryColor: '#002A5C'  },
  { value: 'was', label: 'Washington Redskins', primaryColor: '#FFFFFF', backgroundColor: '#57202E', secondaryColor: '#F1C500'  }


];

class Team extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(event) {
      this.props.onValueChange(event.value);
      this.props.onPrimaryColorChange(event.primaryColor);
      this.props.onBackgroundChange(event.backgroundColor);
      this.props.onSecondaryColorChange(event.secondaryColor);
  }
  render() {
    const primaryColor = this.props.primaryColor;
    const secondaryColor = this.props.secondaryColor;
    const backgroundColor = this.props.backgroundColor;
    const value = this.props.value;
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
