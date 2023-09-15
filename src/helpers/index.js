
import {
  DocumentTextIcon,
  PhotoIcon,
  ChartBarIcon,
  QuestionMarkCircleIcon,
} from '@heroicons/react/24/outline';

// Create our number formatter.
export const currencyFormatter = (currency = 0) => {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  
    // These options are needed to round to whole numbers if that's what you want.
    //minimumFractionDigits: 0, // (this suffices for whole numbers, but will print 2500.10 as $2,500.1)
    //maximumFractionDigits: 0, // (causes 2500.99 to be printed as $2,501)
  }).format(currency);
}


export const getFileIcon = (filename) => {
  const fileExtension = filename.split('.').pop();

  switch (fileExtension.toLowerCase()) {
    case 'pdf':
      return <div><DocumentTextIcon className="w-12 h-12" /> <small className='pl-3'>{fileExtension.toLowerCase()}</small></div>;
    case 'jpg':
    case 'jpeg':
    case 'png':
      return <div><PhotoIcon className="w-12 h-12" /> <small className='pl-3'>{fileExtension.toLowerCase()}</small></div>;
    case 'csv':
    case 'xlsx':
    case 'xls':
      return <div><ChartBarIcon className="w-12 h-12" /> <small className='pl-3'>{fileExtension.toLowerCase()}</small></div>;
    case 'docx':
      return <div><DocumentTextIcon className="w-12 h-12" /> <small className='pl-3'>{fileExtension.toLowerCase()}</small></div>;
    default:
      return <div><QuestionMarkCircleIcon className="w-12 h-12" /> <small className='pl-3'>{fileExtension.toLowerCase()}</small></div>;
  }
}