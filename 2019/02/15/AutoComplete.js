/* A closure is utilized to cache already processed strings
 * and return from cache if possible.
 * if not - the passed dictionary is tested
 */

const AutoCompleteInit = () => {
	const dictionary = {};
  	return (str, dict) => {
      if (str in dict) return dictionary[str];      
      const reg = new RegExp(`^${str}`);      
      return dict.filter(x => reg.test(x));
    }
}
const AutoComplete = AutoCompleteInit();

console.log(AutoComplete('de', ['dog', 'deer', 'deal']));
