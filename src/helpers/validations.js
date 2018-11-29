import * as Yup from 'yup';

Yup.setLocale({
  mixed: {
    required: ({ path }) => {
      const transformedPath = path.replace('_', ' ');
      return `${transformedPath} can't be blank`;
    }
  }
});

function equalTo(ref, path, reference) {
  return Yup.mixed().test({
    name: 'equalTo',
    exclusive: false,
    message: `${path || '${path}'} must be the same as ${reference || '${reference}'}`,
    params: {
      reference: ref.path
    },
    test(value) {
      return value === this.resolve(ref);
    }
  });
}
Yup.addMethod(Yup.string, 'equalTo', equalTo);
