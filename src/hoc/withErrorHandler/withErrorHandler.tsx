import React, { Component } from "react";
import Modal from "../../components/UI/Modal/Modal";
import { AxiosRequestConfig, AxiosResponse, AxiosInstance } from "axios";

interface State {
  error: null | Error;
}

const withErrorHandler = (WrappedComponent: any, axios: AxiosInstance) => {
  return class extends Component {
    requestInterceptor: number;
    responseInterceptor: number;

    constructor(props: any) {
      super(props);
      this.requestInterceptor = axios.interceptors.request.use(
        (request: AxiosRequestConfig) => {
          this.setState({ error: null });
          return request;
        }
      );
      this.responseInterceptor = axios.interceptors.response.use(
        (response: AxiosResponse) => {
          return response;
        },
        (error: Error) => {
          this.setState({ error: error });
          return Promise.reject(error);
        }
      );
    }
    state: State = {
      error: null
    };

    componentWillUnmount() {
      axios.interceptors.request.eject(this.requestInterceptor);
      axios.interceptors.response.eject(this.responseInterceptor);
    }

    errorConfirmedHandler = () => {
      this.setState({ error: null });
    };

    render() {
      let message = null;

      if (this.state.error) {
        message = this.state.error.message;
      }

      return (
        <React.Fragment>
          <Modal
            show={!!this.state.error}
            modalClosed={this.errorConfirmedHandler}
          >
            <div>{message}</div>
          </Modal>
          <WrappedComponent {...this.props} />
        </React.Fragment>
      );
    }
  };
};

export default withErrorHandler;
