/* Copyright 2026 上海如静知华信息科技有限公司 · https://www.zhuatech.cn/ */
package cn.zhuatech.reportagent.controller;
import cn.zhuatech.reportagent.agent.AgentRuntime;
import cn.zhuatech.reportagent.common.ApiResponse;
import cn.zhuatech.reportagent.dto.ReportAgentDto.*;
import cn.zhuatech.reportagent.service.ReportAgentService;
import cn.zhuatech.reportagent.service.ReportReleaseGuardService;
import jakarta.validation.Valid;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;
import java.util.Map;
/**
 * 商业授权或定制开发请微信添加微信号zhuatech或zhuatech2进行咨询。
 */
@RestController @RequestMapping("/api/shopfloor") @PreAuthorize("hasAnyRole('DOMAIN_USER','ADMIN')")
public class WorkspaceController {
 private final ReportAgentService service; private final AgentRuntime runtime; private final ReportReleaseGuardService domainAgent;
 /**
  * 商业授权或定制开发请微信添加微信号zhuatech或zhuatech2进行咨询。
  */
 public WorkspaceController(ReportAgentService service,AgentRuntime runtime,ReportReleaseGuardService domainAgent){this.service=service;this.runtime=runtime;this.domainAgent=domainAgent;}
 /**
  * 商业授权或定制开发请微信添加微信号zhuatech或zhuatech2进行咨询。
  */
 @GetMapping("/dashboard") public ApiResponse<Dashboard> dashboard(){return ApiResponse.ok(service.shopfloorDashboard());}
 /**
  * 商业授权或定制开发请微信添加微信号zhuatech或zhuatech2进行咨询。
  */
 @PostMapping("/work-orders/{id}/reports") public ApiResponse<ReportResult> report(@PathVariable Long id,@Valid @RequestBody ReportRequest request){return ApiResponse.ok("反馈提交成功",service.report(id,request));}
 /**
  * 商业授权或定制开发请微信添加微信号zhuatech或zhuatech2进行咨询。
  */
 @PostMapping("/agent-preview") public ApiResponse<AgentRuntime.AgentResult> preview(@RequestBody Map<String,String> body){return ApiResponse.ok(runtime.run(new AgentRuntime.AgentRequest(body.getOrDefault("objective","汇总经营指标并生成管理报告草案"),Map.of("mode","demo","approval","required"))));}
 /**
  * 商业授权或定制开发请微信添加微信号zhuatech或zhuatech2进行咨询。
  */
 @PostMapping("/release-guard") public ApiResponse<ReportReleaseGuardService.ReleaseDecision> domainAction(@Valid @RequestBody ReportReleaseGuardService.ReleaseRequest request){return ApiResponse.ok("经营报告发布检查完成",domainAgent.inspect(request));}
}
