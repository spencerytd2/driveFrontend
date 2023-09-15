export const getBase64 = (file) => {
  var reader = new FileReader();
  reader.readAsDataURL(file);
  reader.onload = function () {
   
    return reader.result;
  };
  reader.onerror = function (error) {
    
  };
};
