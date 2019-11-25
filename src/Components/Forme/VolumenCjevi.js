import React from 'react';

export default class VolumenCjevi extends React.Component {
	state={
		unutarnjiD: '',
		lCjevi: '',
		volumen:'',
	}

	onSubmit= (e) =>{
		let duzina=this.state.lCjevi;					//prijenos vrijednosti iz stanja u varijablu
		let promjer=this.state.unutarnjiD;
		duzina=duzina*10;								//pretvorba u decimetre
		promjer=promjer/100;
		let vol=(promjer/2)*(promjer/2)*3.14159*duzina;	//izracun volumena
		vol=(vol).toFixed(2);							//zaokruzivanje na dvije decimale
		this.setState({volumen: vol});					//prijenos vol vrijednosti u stanje
		
		
	};
	render(){
		return(
			<form>
		        <h1>Zapremnina cjevi/valjkaste posude</h1>

		        <p className="d-inline">Dužina cjevi/posude:</p>
		        <input 
		        value={this.state.lCjevi} 
		        type="number" 
		        onChange={e => this.setState({lCjevi: e.target.value})} />
		        <p  className="d-inline">(m)</p>
		        <br/>

		        <p className="d-inline">Unutarnji promjer:</p>
		        <input 
		        value={this.state.unutarnjiD}
		        type="number"
		        onChange={e => this.setState({unutarnjiD: e.target.value})} />
		        <p className="d-inline">(mm)</p><br/>
		        
		        <button onClick={e => this.onSubmit(e)}>Izračunaj </button>

		        <p>Volumen(u litrama) je: {this.state.volumen} </p>
		        <br />

		        <p class="blockquote-footer">Upozorenje! Ovaj proračun računa zapremninu ravne linije cjevovoda ili valjkaste posude bez koljena, uboda, suženja i proširenja </p>
  			</form>
		);
	}
	
}
