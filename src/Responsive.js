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
				isDevice: isDevice,
				show: false
            }
		}

		handleDisplay = () => {
			const { isDevice } = this.state
			console.log('isDevice', isDevice);
			isDevice ? this.setState({show: true}) : this.setState({show: false})
		}
		
		componentDidMount() {
			this.handleDisplay()
			window.addEventListener('resize', this.handleDisplay, false)
		}

		componentWillUnmount() {
			window.removeEventListener('resize', this.handleDisplay, false)
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

