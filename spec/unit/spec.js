
describe 'Groupon'

  describe '.parameterizeCity()'
    
    describe 'when given a string'
      it 'returns a string'
        
      end  
    end
    
    describe 'when given a city object'
      it 'returns object.id'
      
      end
    end
    
    describe 'when given a geo object (with lat/lng properties)'
      it 'returns lat/lng'
      
      end
    end
  
  end
  
  describe '.cities()'
    it 'should return a list of cities'
      Groupon.getCities().should_not_be_empty()
    end
    
    describe 'json response' 
    
      before_each
        cities = Groupon.getCities()
      end
    
      it 'returns name'
        cities[0].name.should_not_be_undefined()
      end
    
      it 'returns id' 
        cities[0].id.should_not_be_undefined()
      end
    
      it 'returns latitude'
        cities[0].latitude.should_not_be_undefined()
      end
    
      it 'returns longitude'
        cities[0].longitude.should_not_be_undefined()
      end
      
    end
    
  end
  
  describe '.deals()'
    
    describe 'when specifying a city'
    
      it 'should return a list of deals'
        //Groupon.getDeals('chicago').should_not_be_empty()
      end
      
    end
  
  end
end