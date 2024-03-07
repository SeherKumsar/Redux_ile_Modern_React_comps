import Accordion from "./components/Accordion";

function App() {
  const items = [
    {
      id: 'qwe5465',
      label: 'Can I use React on a project?',
      content: 'You can use React on any project you want. You can use React on any project you want. You can use React on any project you want. You can use React on any project you want.',
    },
    {
      id: 'xcv4567',
      label: 'Can I use JavaScript on a project?',
      content: 'You can use React on any project you want. You can use React on any project you want. You can use React on any project you want. You can use React on any project you want.',
    },
    {
      id: 'bnmbn74125',
      label: 'Can I use CSS on a project?',
      content: 'You can use React on any project you want. You can use React on any project you want. You can use React on any project you want. You can use React on any project you want.',
    },
  ];

  return <Accordion items={items}/>;
}

export default App;
