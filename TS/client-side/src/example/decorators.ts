/**
 * @函数
 * 1. 紧挨着声明的文件
 * 2. 装饰器(从里到外依次调用)
 * 3. 装饰器工厂@some()(从上到下依次生成)
 * 4. 参数装饰器, 方法装饰器, 访问符装饰器, 属性装饰器,应用到每个实例成员上; 
 *    参数装饰器...应用到每个静态成员上;
 *    参数装饰器应用到构造函数上;
 *    类装饰器应用到类上;
 * 5. 类装饰器应用类的声明
 * 6. configurable, writeable, enumrable
 */

 function setProp (target: any): void {
  return undefined
 }

//  @setProp