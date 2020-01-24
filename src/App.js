import React, { useState } from 'react';
import './App.css';
import marked from 'marked';

/*
	Todo:
		editing screen - {textarea}
		markdown tranlated screen - right of above
		save button - saves markdown as a version
		
*/

function createMarkup(str) {
	return {__html: str};
}

function App() {
	const [markdown, setMarkdown] = useState('***testing wrapper***');
	const [html, setHtml] = useState('');
	const onChange = ({ target }) => {
		setMarkdown(target.value);
		setHtml(marked(target.value));
	};
	
	return (
		<div className="App">
			<span>
				<textarea value = { markdown } onChange = { onChange } />
				<div id = 'markdownBox' dangerouslySetInnerHTML={createMarkup(html)}></div>
			</span>
			<input type = 'button' value = 'Save'/>
		</div>
	);
}

export default App;
