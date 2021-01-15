import React from 'react';
import {
	isMobile,
	isDesktop
} from './BrowserDetection';

export const Responsive = (HOCComponent, isDevice) => {
    return class extends React.Component{
        constructor(props) {
            super(props)
            this.state = {
				isDevice,
				show: false
            }
		}

		handleDisplay = () => this.state.isDevice() ? this.setState({show: true}) : this.setState({show: false})
		
		componentDidMount() {
			this.handleDisplay()
			window.addEventListener('resize', this.handleDisplay)
		}

		componentWillUnmount() {
			window.removeEventListener('resize', this.handleDisplay)
		}
        
        render(){
			const { show } = this.state;
            return (
                show ? <HOCComponent isDevice={this.state.data} {...this.props} /> : null
            )
        }
    } 
}

export const View = ({ children }) => {
	return <React.Fragment>{children}</React.Fragment>;
};

export const Mobile = Responsive(View, isMobile);
export const Desktop = Responsive(View, isDesktop);

