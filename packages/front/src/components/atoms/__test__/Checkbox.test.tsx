import React from 'react';
import renderer from 'react-test-renderer';
import Checkbox, { SizeList, DEFAULT_SIZE } from '../Checkbox';

const label = 'test_checkbox';

describe('Checkbox', () => {
  describe('label', () => {
    it('渡したラベルが出力されること', () => {
      const rendered = renderer.create(<Checkbox label={label} />);

      expect(rendered.toJSON().children.[1]).toEqual(label);
    });
  });

  describe('checked', () => {
    it('checkedを省略した場合、checkがoffになること', () => {
      const rendered = renderer.create(<Checkbox label={label} />);

      expect(rendered.toJSON().children[0].props.checked).toBeFalsy();
    });

    it('checkedにtrueを渡した場合、checkがonになること', () => {
      const rendered = renderer.create(<Checkbox label={label} checked={true} />);

      expect(rendered.toJSON().children[0].props.checked).toBeTruthy();
    });

    it('checkedにfalseを渡した場合、checkがoffになること', () => {
      const rendered = renderer.create(<Checkbox label={label} checked={false} />);

      expect(rendered.toJSON().children[0].props.checked).toBeFalsy();
    });
  });

  describe('size', () => {
    it('sizeを省略した場合、デフォルトのサイズがclassに付与されること', () => {
      const rendered = renderer.create(<Checkbox label={label} />);

      expect(rendered.toJSON().props.className.split(' ').includes(DEFAULT_SIZE)).toBeTruthy();
    });

    SizeList.forEach((size) => {
      it(`sizeに${size}を渡した場合、${size}がclassに付与されること`, () => {
        const rendered = renderer.create(<Checkbox size={size} label={label} />);

        expect(rendered.toJSON().props.className.split(' ').includes(size)).toBeTruthy();
      });
    });
  });

  describe('block', () => {
    it('blockを渡した場合、blockがclassに付与されること', () => {
      const rendered = renderer.create(<Checkbox label={label} block />);

      expect(rendered.toJSON().props.className.split(' ').includes('block')).toBeTruthy();
    });

    it('blockを省略した場合、blockがclassに付与されないこと', () => {
      const rendered = renderer.create(<Checkbox label={label} />);

      expect(rendered.toJSON().props.className.split(' ').includes('block')).toBeFalsy();
    });
  });

  describe('className', () => {
    it('classNameを渡した場合、classNameがclassに付与されること', () => {
      const testClass = 'testClass';
      const rendered = renderer.create(<Checkbox label={label} className={testClass} />);

      expect(rendered.toJSON().props.className.split(' ').includes('testClass')).toBeTruthy();
    });
  });

  describe('onChange', () => {
    it('onChangeを渡すした場合、checkboxが変更された時にコールバックが実行されること', () => {
      const handleChange = jest.fn();
      const rendered = renderer.create(<Checkbox label={label} onChange={handleChange} />);

      rendered.root.props.onChange({ target: { checked: true } });

      expect(handleChange).toHaveBeenCalled();
    });
  });
});
