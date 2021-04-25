import { makeLoadLastRankingController } from "@/main/factories";
import { adaptExpress } from "../adapters";

import { Router } from "express";

export default (router: Router): void => {
    router.get('/ranking/last', adaptExpress(makeLoadLastRankingController()))
}