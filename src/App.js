import React, { useState } from 'react';
import './App.css';
import marked from 'marked';

function createMarkup(str) {
	return {__html: str};
}

function App() {
	const [markdown, setMarkdown] = useState('');
	const [html, setHtml] = useState('');
	const [versionList, setVersionList] = useState([]);
	
	const onChange = ({ target }) => {
		setMarkdown(target.value);
		setHtml(marked(target.value));
	};
	
	const saveVersion = () => {
		const idx = versionList.length;
		setVersionList([...versionList, { id : `version ${ idx }`, markdown, html }]);
	};
	
	const loadVersion = version => {
		setMarkdown(version.markdown);
		setHtml(version.html);
	};
	
	const displayVersions = () => {
		return (
			<ul>{
				versionList.length > 0 ? <h3>Saved Versions</h3> : ''
			}{
				versionList.map(version => {
					return ( <input type = 'button' className = 'versionButton' key = { version.id } value = { version.id } onClick = { (event) => { loadVersion(version)} }/> )
				}) 
			}</ul>
		);
	};
	
	return (
		<div className="App">
			<h2>Markdown Text Editor</h2>
			<span>
				<textarea value = { markdown } onChange = { onChange } />
				<div id = 'markdownBox' dangerouslySetInnerHTML={createMarkup(html)}></div>
			</span>
			<input type = 'button' value = 'Save' onClick = { saveVersion }/>
			{ displayVersions() }
		</div>
	);
}

export default App;
