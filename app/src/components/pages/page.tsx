import React from 'react';
import { MessageBarSection } from '@components/messageBarAPI';
import './page.scss';

interface PageProps {
    className?: string;
}
export class Page extends React.PureComponent<PageProps> {

    //   static displayName = Layout.name;
    public render() {
        const { className } = this.props;
        
        return (
            <div className={`mt-page-container ${className}`}>
                <MessageBarSection />
                {false && <div className='mt-page-header'></div>}
                {/* <NavMenu
                    title={`MGB Calculator`}
                    colorTheme='f-black'
                    defaultItems={[
                        { text: 'Home', to: '/' },
                        { text: 'Order', to: '/order' },
                        {
                            text: 'Manage', items: [
                                { text: 'Products', to: '/manage/products' },
                                { text: 'Product Options', to: '/manage/productOptions' },
                                { text: 'Discounts', to: '/manage/discounts' }
                            ]
                        },
                        { text: 'Reload', onClick: async () => window.location.reload() },
                    ]}
                /> */}
                <div className='mt-page-middle'>
                    {this.props.children}
                </div>
                {/* <div className='mt-page-footer' style={{ display: 'none' }}>
                    Stuff goes here
                </div> */}
            </div>
        );
    }
}
