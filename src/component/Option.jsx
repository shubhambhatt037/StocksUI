import Img from '../assets/images.jpg'

export default function Option() {
  return (
    <div className='m-4'>
        <h1 className='m-8 text-2xl font-semibold'>All Investment Options</h1>
        <div className='flex flex-row justify-evenly'>
            <div>
                <img src={Img} alt="" className='size-20'/>
                <h3>Stocks</h3>
            </div>
            <div>
                <img src={Img} alt="" className='size-20'/>
                <h3>Gold Bond</h3>
            </div>
            <div>
                <img src={Img} alt="" className='size-20'/>
                <h3>Mutual Funds</h3>
            </div>
            <div>
                <img src={Img} alt="" className='size-20'/>
                <h3>NPS</h3>
            </div>
        </div>
        <div className='flex flex-row justify-evenly'>
            <div>
                <img src={Img} alt="" className='size-20'/>
                <h3>EFTs</h3>
            </div>
            <div>
                <img src={Img} alt="" className='size-20'/>
                <h3>Liquid Funds</h3>
            </div>
            <div>
                <img src={Img} alt="" className='size-20'/>
                <h3>Portfolio</h3>
            </div>
            <div>
                <img src={Img} alt="" className='size-20'/>
                <h3>Bonds</h3>
            </div>
        </div>
    </div>
  )
}
