let instance: unknown;
let baseUrl: string;

const handlersInitial = {
  requestHandler: (
    ...req: [string | URL | Request, RequestInit | undefined]
  ) => {
    console.log(req);
  },
  responseHandler: (res: Response) => {
    console.log(res);
  },
};

type IHandlers = typeof handlersInitial;
interface IProps {
  baseUrl: string;
}
export default class BaseService {
  handlers = handlersInitial;

  constructor(props: IProps) {
    baseUrl = props.baseUrl;
    if (instance) {
      throw new Error("You can only create one instance!");
    }
    instance = this;
  }

  private async request(
    ...args: [string | URL | Request, RequestInit | undefined]
  ) {
    this.handlers.requestHandler(...args);
    const response = await fetch(...args);
    this.handlers.responseHandler(response);
    return response;
  }

  public setHandler<
    TypeKey extends keyof IHandlers,
    TypeHandler extends IHandlers[TypeKey],
  >(type: TypeKey, handler: TypeHandler) {
    this.handlers[type] = handler;
  }

  public async get<T>(endpoint: string, options?: RequestInit): Promise<T> {
    const response = await this.request(baseUrl + endpoint, options);
    return (await response.json()) as T;
  }

  public async post<T, P>(
    endpoint: string,
    data?: P,
    options?: RequestInit
  ): Promise<T> {
    const response = await this.request(baseUrl + endpoint, {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
      ...options,
    });
    if (!response.ok) {
      throw new Error("Failed to post data");
    }
    return response.json();
  }

  public async put(
    endpoint: string,
    data?: any,
    options?: RequestInit
  ): Promise<any> {
    const response = await this.request(baseUrl + endpoint, {
      method: "PUT",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
      ...options,
    });
    if (!response.ok) {
      throw new Error("Failed to put data");
    }
    return response.json();
  }

  public async delete(endpoint: string, options?: RequestInit): Promise<void> {
    const response = await this.request(baseUrl + endpoint, {
      method: "DELETE",
      ...options,
    });
    if (!response.ok) {
      throw new Error("Failed to delete data");
    }
  }
}
