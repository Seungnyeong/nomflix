import { moviesApi, tvApi } from "api";
import React from "react";
import DetailPresenter from "./DetailPresenter";

export default class extends React.Component{
    constructor(props) {
        super(props);
        const { location: { pathname } } = props;
        this.state = {
            result : null,
            error: null,
            loading: true,
            isMovie : pathname.includes("/movie/")
        };
    }
    

    async componentDidMount() {
        const {
            match: { params: { id }},
            history: { push },
            location : { pathname }
        } = this.props;
        const { isMovie } = this.state;
        const parsedId = parseInt(id);
        if (isNaN(parsedId)) {
            return push("/"); // kill the function
        }
        let result = null;
        try {
            if (isMovie) {
                // ES6
                ({data : result } = await moviesApi.movieDetail(parsedId));
            } else {
                ({data : result } = await tvApi.showDetail(parsedId));
                
            }
            console.log(result)
        } catch {
            this.setState({ error : "Can't find anthing "})
        } finally {
            this.setState({ loading : false, result})   
        }
        
    }

    render() {
        const { result, error, loading } = this.state;
        console.log(result)
        return (<DetailPresenter
            result={result}
            error={error}
            loading={loading}
        />);
    }
}