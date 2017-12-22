import * as React from 'react';

interface HeaderProps {
  clearResults: () => any;
  toggleAppendResults: () => any;
  toggleScrollToBottom: () => any;
  appendResults: boolean;
  scrollToBottom: boolean;
}

interface HeaderState {
  /* empty */
}

class Header extends React.Component<HeaderProps, HeaderState> {

  constructor(props?: HeaderProps, context?: any) {
    super(props, context);
  }
  render() {
    return (
      <header>
        <label>
          <input type="checkbox"
            checked={this.props.appendResults}
            onChange={() => this.props.toggleAppendResults()} />
          Append Results
        </label>
        <label>
          <input type="checkbox"
            checked={this.props.scrollToBottom}
            onChange={() => this.props.toggleScrollToBottom()} />
          Scroll to the bottom
        </label>
        <button onClick={() => this.props.clearResults()}>Clear Results</button>
      </header>
    );
  }
}

export default Header;
