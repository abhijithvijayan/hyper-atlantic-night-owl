/**
 *  @author abhijithvijayan <abhijithvijayan.in>
 */

const lightOverLay = 'rgba(0, 0, 0, .15)';

exports.decorateConfig = config => {
	return {
		...config,
		backgroundColor: '#000720',
		foregroundColor: '#dadfe1',
		borderColor: 'rgba(28, 35, 65, 0.9)',
		cursorColor: '#7e57c2',
		cursorAccentColor: '#ffffff',
		selectionColor: 'rgba(248, 28, 229, 0.3)',
		colors: {
			black: '#011627',
			red: '#b52e31',
			green: '#33ff00',
			yellow: '#FED766',
			blue: '#007fff',
			magenta: '#1857a4',
			cyan: '#00C7FF',
			white: '#dadfe1',
			lightBlack: '#575656',
			lightRed: '#ef5350',
			lightGreen: '#22da6e',
			lightYellow: '#FED766',
			lightBlue: '#00b3e6',
			lightMagenta: '#1857a4',
			lightCyan: '#00C7FF',
			lightWhite: '#d0d0d0',
		},
		css: `
    ${config.css}
    .hyper_main {
      border: none !important;
    }
    .header_header {
      background-color: ${lightOverLay} !important;
    }
    .header_windowHeaderWithBorder {
      border-bottom-width: 0px !important;
    }
    .header_appTitle {
      width: 65%;
      text-align: center;
      overflow: hidden;
    }
    .tabs_borderShim {
      border-color: transparent !important;
    }
    .tab_tab {
      background-color: #0e1224;
      color: #5c6b80;
    }
    .tab_tab::before {
      background-color: #272B3B;
    }
    .tab_active {
      background-color: #1c2341;
      color: #dadfe1;
    }
    .tab_active::before {
      background-color: #262A39;
    }
    .tab_text {
      background-color: #0e1224;
      color: #5c6b80;
    }
    .tab_textActive {
      background-color: #1c2341;
      color: #dadfe1;
    }
    .hyper-search-wrapper {
        border: 0 !important;
        padding: 0 !important;
        background-color: transparent !important;
        display: flex;
        opacity: 0.8 !important;
      }
    .hyper-search-wrapper button {
      top: 0 !important;
      opacity: 0.8 !important;
      padding: 0 6px;
      cursor: pointer;
    }
    .hyper-search-wrapper button:hover {
      opacity: 1.0 !important;
    }
    .hyper-search-wrapper button:nth-of-type(1) {
      border-radius: 4px 0 0 4px !important;
      border-right: 1px solid #575656 !important;
    }
    .hyper-search-wrapper button:nth-of-type(2) {
      border-radius: 0 4px 4px 0 !important;
    }
    .hyper-search-wrapper:before {
      width: 20px;
      color: #000;
      position: absolute;
      content: "🔍";
      font-size: 10px;
      margin: 7px;
      z-index: 999;
    }
    #hyper-search-input {
      background-color: #ffffff !important;
      border-radius: 4px;
      box-shadow: 0 1px 10px rgba(0, 0, 0, 0.5);
      padding: 3px 6px 3px 24px !important;
      color: #000720 !important;
      opacity: 0.9 !important;
      margin-right: 2px;
    }
    #hyper-search-input:focus {
      opacity: 1.0 !important;
      box-shadow: 0 1px 10px rgba(0, 0, 0, 1.0);
    }
    .footer_footer {
      background-color: ${lightOverLay} !important;
      opacity: 1;
    }
    .footer_group {
      opacity: 0.35;
    }
    .footer_group:hover {
      opacity: 0.85 !important;
    }
  `,
	};
};
