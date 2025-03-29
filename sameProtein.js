function codeForSameProtein(seq1,seq2){
    arr1 = seq1.match(/.{3}/g);
    arr2 = seq2.match(/.{3}/g);
    
    for (var i=0; i<arr1.length; ++i) {
      if (codons[arr1[i]] !== codons[arr2[i]])
        return false;
    }
    
    return true;
  }
// Nên tìm hiểu code này