/* A closure is utilized to cache already processed strings
 * and return from cache if possible.
 * if not - the passed dictionary is tested
 */

// TODO: add a hashing function to check if input dict is the same as when cached

const AutoCompleteInit = () => {
	const dictionary = {};
  	return (str, dict) => {
      if (str in dict) return dictionary[str];      
      const reg = new RegExp(`^${str}`);
      const res = dict.filter(x => reg.test(x));
      dictionary[str] = res;
      return res;
    }
};

const AutoComplete = AutoCompleteInit();

console.log(AutoComplete('de', ['dog', 'deer', 'deal']));
