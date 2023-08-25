
import * as React from 'react';
import { hot } from "react-hot-loader/root";

import Link from 'next/link';

interface Props {
   name:
    string
}

class App extends React.Component<Props> {
  render() {
    const { name } = this.props;
    return (
      <>
        <h1>
          Hello {name}          
        </h1>
        <Link href="/selections/1">click me</Link>
      </>
    );
  }
}

export default hot(App);
