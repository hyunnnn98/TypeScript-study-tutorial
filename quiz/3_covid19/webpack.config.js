module.exports = {
  mode: 'development',

  // 메인 스크립트 파일
  entry: './src/app.ts',

  module: {
    rules: [
      {
        // 확장자 .ts의 파일들은
        test: /\.ts$/,
        // ts-loader로 컴파일 하겠다.
        use: 'ts-loader',
      },
    ],
  },
  // import 문에서 .ts 확장자를 생략해도 되게하기 위해서
  // 이걸 정의안하면 import "" from .ts를 적어야한다
  // 실무에서는 import 문에서 확장자를 생략하는것이 많아서
  // 왜 생략해도 되는지 인식해두는게 좋다.(혹시나 관련 버그가 발생할지도 모르니껜)
  resolve: {
    // 확장자를 배열로 넣어둠
    extensions: ['.ts', '.js'],
  },
};
