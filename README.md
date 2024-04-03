# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

# Props và Composition

- Props là dữ liệu được truyền từ component cha xuống component con
- Props là thuộc tính READ-ONLY, component con không thay đổi được. Muốn đổi thì nhờ component cha
- Props giúp tạo ra sự đa dạng ch component. Cùng một component với props khác nhau thì render ra khác nhau

# Folder structure

```
src
|_components (shared components between features)
| |_Loading
|   |_index.jsx
|   |_styles.scss
|
|_features
| |_Todo
|   |_ components (components of feature Todo)
|   |_ pages (pages of feature Todo)
|   |_ index.jsx (entry point of feature Todo)
|
|_App.jsx
```

# Props Types

npm install --save prop-types

# Xoá những cái không dùng đến

Alt + Shift + o

# State trong ReactJS

- State được tạo ra và quản lý bới component hiện tại
- State được dùng cho những dữ liệu có khả năng thay đổi

# Classnames

npm i classnames

# Props vs State

- Truyền dữ liệu từ cha xuống con: Props
- Truyền dữ liệu giữa các component ngang hàng: để state trên component cha, rồi từ cha truyền ngược xuống component con
- Truyền dữ liệu giữa các trang khác nhau: dùng Redux

# ReactJS - Component life cycle

life cycle : vòng đời

Life cycle của component trong ReactJS là gì ?

với component trong ReactJS, life cycle gồm 3 giai đoạn:

- Được tạo ra (Mounting)
- Qua nhiều thay đổi (Updating)
- Và bị huỷ bỏ (Unmounting)

# Không sử dụng các life cycle này nữa:

- componentWillMount()
- componentWillReceiveProps()

# Component và PureComponent

- Nên dùng PureComponent
- Vì có shallow comprasion trong hàm shouldComponentUpdate()

# constructor()

- Được phép dùng
- Nhớ có super(props)
- Khai báo state
- Định nghĩa properties của component

```jsx
class App extends PureComponent {
  constructor(props) {
    super(props);

    this.DEFAULT_MAX_LENGTH = 10;
    this.state = {
      productList: [],
    };
  }
}
```

# componentDidMount()

- Chạy đúng 1 một lần khi component được render
- Tương đương với

```jsx
useEffect(() => {}, []);
```

```jsx
class HomePage extends PureComponent {
  constructor(props) {
    super(props);

    this.DEFAULT_MAX_LENGTH = 10;
    this.state = {
      loading: true,
      productList: [],
    };
  }

  async componentDidMount() {
    try {
      // Send GA page view tracking
      analytics.page("Home page");

      const productList = await productApi.getAll();
      this.setState({
        loading: false,
        productList
      })
    } catch (error) {
      console.og("Failed to fetch product list: ", error);
      this.setState({ loading: false });
    }
  }

  render() {
    const { loading, productList } = this.state;
    if(loading) render <Loader />

    return <ProductList productList={productList} />
  }
}
```

- Được phép dùng
- Khởi tạo dữ liệu cho component: gọi API, biến đổi dữ liệu, cập nhật state
- Gửi tracking page view (GA, FacebookPixel, ...)

# componentWillUnmount()

- Chạy khi component bị huỷ bỏ (Component bị huỷ bỏ khi chúng ta không render nó lên màn hình hoặc khi chuyển trang)
- Chạy đúng một lần
- Được phép dùng
- Clear timeout hoặc interval nếu có dùng
- Reset dữ liệu trên redux nếu cần thiết

```jsx
class Countdown extends PureComponent {
  constructor(props) {
    super(props);

    this.DEFAULT_MAX_LENGTH = 10;
    this.state = {
      currentSecond: 0,
    };
  }

  componentDidMount() {
    this.timer = setInterval(() => {
      this.setState((prevState) => ({
        currentSecond: prevState.currentSecond - 1;
      }));
    }, 1000);
  }

  componentWillUnmount() {
    if(this.timer) {
      clearInterval(this.timer)
    }
  }

  render() {
    const {currentSecond} = this.state;
    return <p>{currentSecond}</p>
  }
}
```

# componentDidUpdate()

- Chạy mỗi khi có props hoặc state thay đổi
- Cực kỳ hạn chế dùng
- ADVANCED Chỉ dùng nếu muốn handle update component khi click nút back mà trên URL có query params

# Lỗi can't setState() on unmounted component

-> Warning: Can't call setState (or forceUpdated) on an unmounted component. This is a no-op, but it indicates a memory leak in your application. To fix, cancel all subscriptions and asyncjronous tasks in the componentWillUnmount method. ...

- Lý do:

  - Ở trang Home, đang lấy dữ liệu API, sau đó update vào state.
  - Nhưng ác thay, dữ liệu chưa lấy xong, user qua trang About
  - Thế là component bị unmout.
  - Ngay sau đó, dữ liệu từ API được trả về, và tiếp tục gọi setState()
  - Đau lòng thay, component Home có còn đâu mà update

- Giải pháp
- Dùng một flag isComponentMounted để biết trạng thái của component

```jsx
class Home extends PureComponent {
  constructor(props) {
    super(props);

    this.isComponentMounted = false
    this.state = {
      currentSecond: 0,
    };
  }

  componentDidMount() {

    this.isComponentMounted = true;

    try {
      const productList = await productApi.getAll();

      if(this.isComponentMounted){
        this.setState({ productList });
      }
    } catch (error) {
        console.og("Failed to fetch product list: ", error);
        this.setState({ loading: false });
    }
  }

  componentWillUnmount() {
    this.isComponentMounted = false;
  }
 }
```
