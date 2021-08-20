import moxios from 'moxios';
import { testStore } from './../utility/index';
import { selectCategory, selectMeal, setCategories, changeFilter } from './../redux/actions/index';

describe('Fetch all Categories', () => {
  beforeEach(() => {
    moxios.install();
  });
  afterEach(() => {
   moxios.uninstall();
 });
 it('Fetch successfully', () => {
   const expectedResult = {
    categories:  [{
      name: 'juma',
      age: 30,
    }
    ]
   }

   const store = testStore();

   moxios.await(() => {
    
   })
 })
})

