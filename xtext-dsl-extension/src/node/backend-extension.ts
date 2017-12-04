/*
 * Copyright (C) 2017 TypeFox and others.
 *
 * Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0
 */

import { injectable, ContainerModule } from "inversify";
import { BaseLanguageServerContribution, LanguageServerContribution, IConnection } from "@theia/languages/lib/node";
import * as path from 'path';


export default new ContainerModule(bind => {
    bind<LanguageServerContribution>(LanguageServerContribution).to(DSLContribution);
});

@injectable()
class DSLContribution extends BaseLanguageServerContribution {

    readonly id = "dsl";
    readonly name = "DSL";

    start(clientConnection: IConnection): void {
        const jar = path.resolve(__dirname, '../../build/dsl-language-server.jar');

        const command = 'java';
        const args: string[] = [
            '-jar',
            jar
        ];
        const serverConnection = this.createProcessStreamConnection(command, args);
        this.forward(clientConnection, serverConnection);
    }

    protected onDidFailSpawnProcess(error: Error): void {
        super.onDidFailSpawnProcess(error);
        console.error("Error starting DSL language server.", error)
    }

}



