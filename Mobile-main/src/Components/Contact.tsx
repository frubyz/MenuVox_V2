import Dish from './Dish';

import ContactDark from '../Themes/Contact/Dark';
import ContactLight from '../Themes/Contact/Light';

function Contact({ theme }) {
	const info1 = {
		name: 'E-mail',
		content: 'contact@menuvox.fr'
	};

	const info2 = {
		name: 'Discord',
		content: 'Wiwok: Wiwok#2553\nUnel: Unel#1527'
	};

	const info3 = {
		name: 'Rencontre',
		content: 'Vous pouvez nous trouver en TSTI2D2 au lycée Vaucanson.'
	};

	const info4 = {
		name: 'Github',
		content: 'Le code est disponible ici, vous pouvez également apporter des suggestions et rapporter des bugs.'
	};

	const css = theme === 'dark' ? ContactDark : ContactLight;

	return (
		<div className="Contact" style={css}>
			<Dish dish={info1} theme={theme} />
			<Dish dish={info2} theme={theme} />
			<Dish dish={info3} theme={theme} />
			<a href="https://github.com/Menu-Vaucanson"><Dish dish={info4} theme={theme} /></a>
		</div>
	);
}

export default Contact;