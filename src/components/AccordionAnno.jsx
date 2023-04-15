import Accordion from 'react-bootstrap/Accordion';
import Green_btn from './Green_btn';

const AccordionAnno = () => {
    return (
        <div >
            <Accordion defaultActiveKey="0" flush>
                <Accordion.Item eventKey="0" className='mb-1 '>
                    <Accordion.Header className=' '><p className='ff_Medium grey fs_xl fw_700 mb-0 Accordion_padding'>Annotab Studio</p></Accordion.Header>
                    <Accordion.Body>
                        <p className=' ff_Book  fs_sm grey  fw_300 max_width_438 pb-4 ps-4'>Ultricies in integer semper pharetra. Facilisi neque nec id proin eu vestibulum. Ultricies in integer semper pharetra. Facilisi neque nec id proin eu vestibulum.  proin eu vestibulum.</p>
                        <div className=' pb-4 ps-4'>
                            <Green_btn any_text='Learn More' />
                        </div>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1" className='mb-1'>
                    <Accordion.Header ><p className=' ff_Medium grey fs_xl fw_700 mb-0 Accordion_padding'>Video Annotab </p></Accordion.Header>
                    <Accordion.Body>
                        <p className=' ff_Book  fs_sm grey  fw_300 max_width_438 pb-5 ps-4'>Ultricies in integer semper pharetra. Facilisi neque nec id proin eu vestibulum. Ultricies in integer semper pharetra. Facilisi neque nec id proin eu vestibulum.  proin eu vestibulum.</p>
                        <div className=' pb-4 ps-4'>
                            <Green_btn any_text='Learn More' />
                        </div>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="3" className='mb-1'>
                    <Accordion.Header><p className=' ff_Medium grey fs_xl fw_700 mb-0 Accordion_padding'>Images Annotab </p></Accordion.Header>
                    <Accordion.Body>
                        <p className=' ff_Book  fs_sm grey  fw_300 max_width_438 mb-5 ps-4'>Ultricies in integer semper pharetra. Facilisi neque nec id proin eu vestibulum. Ultricies in integer semper pharetra. Facilisi neque nec id proin eu vestibulum.  proin eu vestibulum.</p>
                        <div className=' pb-4 ps-4'>
                            <Green_btn any_text='Learn More' />
                        </div>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="4" className='mb-1 grey'>
                    <Accordion.Header><p className=' ff_Medium grey fs_xl fw_700 mb-0 Accordion_padding'>Annoations</p></Accordion.Header>
                    <Accordion.Body className='lh_25'>
                        <p className=' ff_Book  fs_sm grey  fw_300 max_width_438 mb-5 ps-4'>Ultricies in integer semper pharetra. Facilisi neque nec id proin eu vestibulum. Ultricies in integer semper pharetra. Facilisi neque nec id proin eu vestibulum.  proin eu vestibulum.</p>
                        <div className=' pb-4 ps-4'>
                            <Green_btn any_text='Learn More' />
                        </div>
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </div>
    )
}

export default AccordionAnno